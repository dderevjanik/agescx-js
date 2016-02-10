declare var pako;
/**
 * AgeScx Data view
 * supports reading and writing primitive types
 * in scenario file. After get/set'DataType', offset is automaticly
 * moved forward about size of 'DataType'
 */
class ASDataView {
	
	/**
	 * current position in scenario file
	 */
	public offset: number = 0;
	/**
	 * original DataView from JS API
	 */
	private _data: DataView = null;
	
	/**
	 * @param dataView it's DataView object from JS Api. It helps to read/write 'DataType'
	 * @param offset starting offset, optionally at 0 position in scenario file
	 */
	constructor(dataView: DataView, offset: number = 0){
		this.offset = offset;
		this._data = dataView;
	}
	
	/**
	 * skip number of bytes from current offset
	 * @param bytes number of bytes to skip
	 * @return offest position after skiping
	 */
	public skip(bytes: number): number{
		this.offset += bytes;
		return this.offset;
	}
	
	/**
	 * will jump to offset from starting point
	 * @param offset to jump
	 */
	public toOffset(offset: number){
		this.offset = offset;
	}
	
	/**
	 * will inflate dataview
	 * @param offset default 0, a point from which deflate
	 */
	public inflate(offset: number = 0){
		let toInflate = new Uint8Array(this._data.buffer.slice(offset));
		let inflated = pako.inflate(toInflate, {raw: true});
		this._data = new DataView(inflated.buffer);
		this.offset = 0; //restart position
	}
	
	/**
	 * get bytes
	 * @param repeat number of bytes to retrieve
	 */
	public getBytes(repeat: number = 1): Uint8Array{
		this.offset += repeat;
		return new Uint8Array(this._data.buffer.slice(this.offset-repeat, repeat));
	}
	
	/**
	 * @param repeat number of char(s) to retrieve
	 * @description size of char is 1 byte
	 * @return array of char(s)
	 */
	public getChar(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return String.fromCharCode(this._data.getInt8(offset));
		}, 1);
	}

	/**
	 * @param repeat number of str16(s) to retrieve
	 * @description every 16-bit length string has UInt16 at start, where
	 * is size of string described
	 * @return array of 16-bit length string(s)
	 */
	public getStr16(repeat: number = 1): Array<string>{
		let result: Array<string> = new Array<string>();
		for (let i: number = 0; i < repeat; i++){
			result.push(
				this.getChar( this.getUint16(1)[0] ).join("")
			);
		}
		return result;
	}

	/**
	 * @param repeat number of str32(s) to retrieve
	 * @description every 32-bit length string has UInt32 at start, where
	 * is size of string described
	 * @return array of 16-bit length string(s)
	 */
	public getStr32(repeat: number = 1): Array<string>{
		let result: Array<string> = new Array<string>();
		for (let i: number = 0; i < repeat; i++){
			result.push(
				this.getChar( this.getUint32(1)[0] ).join("")
			);
		}
		return result;
	}
	
	/**
	 * @param repeat number of Int8(s) to retrieve
	 * @return array of 8-bit length Int(s)
	 */	
	public getInt8(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getInt8(offset);
			}, 1);
	}

	/**
	 * @param repeat number of UInt8(s) to retrieve
	 * @return array of 8-bit length UInt(s)
	 */	
	public getUint8(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getUint8(offset);
			}, 1);
	}
	
	/**
	 * @param repeat number of Int16(s) to retrieve
	 * @return array of 16-bit length Int(s)
	 */	
	public getInt16(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getInt16(offset, true);
			}, 2);
	}
	
	/**
	 * @param repeat number of UInt16(s) to retrieve
	 * @return array of 16-bit length UInt(s)
	 */	
	public getUint16(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getUint16(offset, true);
			}, 2);
	}
	
	/**
	 * @param repeat number of Int32(s) to retrieve
	 * @return array of 32-bit length Int(s)
	 */	
	public getInt32(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getInt32(offset, true);
			}, 4);
	}
	
	/**
	 * @param repeat number of UInt32(s) to retrieve
	 * @return array of 32-bit length UInt(s)
	 */	
	public getUint32(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getUint32(offset, true);
			}, 4);
	}
	
	/**
	 * @param repeat number of float32(s) to retrieve
	 * @return array of 32-bit length float(s)
	 */	
	public getFloat32(repeat: number = 1): Array<number>{
		return this._repeater(repeat, (offset: number) => {
			return this._data.getFloat32(offset, true);
			}, 4);
	}
	
	/**
	 * @param repeat number of float64(s) to retrieve
	 * @return array of 64-bit length float(s)
	 */	
	public getFloat64(repeat: number = 1): Array<number>{
		return this._repeater(repeat, this._data.getFloat64, 8);
	}

	/**
	 * @param repeat how many times to repeat
	 * @param callback function to callback on DataView
	 * @param size data type size, it'll move offset forward about size of DataType
	 * @return array of readed data
	 */
	private _repeater(repeat: number, callback: Function, size: number): Array<number>{
		let result: Array<any> = new Array<any>();
		let getfnc = callback.bind(this._data);			// bind function to _data object, otherwise we'll get an erro
		for(let i: number = 0; i < repeat; i++){
			result.push(getfnc(this.offset));
			this.offset += size;
		}
		return result;
	}
	
}