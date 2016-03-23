import ISetup from './../Interfaces/ISetup';

const createSetup = (): ISetup => ({
    allTech: 0,
    aiType: 0,
    startCam: [0, 0],
    height: 0,
    width: 0,
    nextId: 0,
    filename: ''
});

export default createSetup;
