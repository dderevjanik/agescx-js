import { ScenarioStruct } from 'io/Structures/ScenarioStruct';
import * as jsontoxml from 'jsontoxml';
import * as yamljs from 'yamljs';

const supportedFormats = {
  json: 'json',
  xml: 'xml',
  yaml: 'yaml'
};
type SupportedFormats = keyof typeof supportedFormats;

/**
 * Convert scenario to other format
 * @param scenario - scenario to convert
 * @param format - convert scenario to this format (json, xml, yaml)
 * @param section [option] - specify which part of scenario convert. For example, you can convert only triggers. If not defined it'll convert whole scenario.
 */
export const convertScenario = (scenario: ScenarioStruct, format: SupportedFormats, section?: keyof ScenarioStruct) => {
  const selectedSection = section ? scenario[section] : scenario;
  switch (format) {
    case 'json': {
      return JSON.stringify(selectedSection, null, 2);
    }
    case 'xml': {
      return jsontoxml({ [section ? section : 'scenario']: scenario }, { prettyPrint: true });
    }
    case 'yaml': {
      return yamljs.stringify(selectedSection);
    }
    default: {
      throw new Error(`undefined format '${format}'. Supported formats are: '${Object.keys(supportedFormats)}'`);
    }
  }
};
