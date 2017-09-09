
import JsonMetadata from './JsonMetadata'
import JsonPropMetadata from './JsonPropMetadata'
import JsonPropType from './JsonPropTypeEnum'

export default class JsonMetadataHelper {

    /**
     * Converts the specified jsonObject in a new instance of "JsonMetadata".
     * @param jsonObject Metadata json
     */
    static convertToJsonMetadata(jsonObject: object) {

        if (Array.isArray(jsonObject))
            throw new Error('Array is not a valid Json Schema.');

        let jsonMetadata = new JsonMetadata();

        // Iterates through the Json object properties
        Object.entries(jsonObject).forEach(([key, value]) => {
            console.log(key, value)

            switch (typeof(value)) {
                case 'string':
                    
                    let propType = JsonMetadataHelper.getPropType(value);
                    let propMetadata = new JsonPropMetadata(propType);
                    
                    // Adds a new "JsonPropMetadata" for the current prop
                    jsonMetadata.propsMetadata.push(propMetadata);
                    break;
            
                case 'object':
                    if (Array.isArray(value))
                        throw new Error(`Json property of the type array is not supported. Property: '${key}'.`);

                    
                    break;
                default:
                    throw new Error(`Json property of '${typeof(value)}' type is not supported. Property: '${key}'.`);
            }
        });
    }

    /**
     * Gets a "JsonPropType" from the specified type.
     * @param type Json schema property type
     */
    private static getPropType(type: string) {

        switch (type.toLowerCase()) {
            case 'string':
                return JsonPropType.String;

            case 'number':
                return JsonPropType.Number;

            case 'boolean':
                return JsonPropType.Boolean;

            case 'object':
                return JsonPropType.Object;

            case 'array':
                return JsonPropType.Array;

            case 'identifier':
                return JsonPropType.Identifier;
        
            default:
                throw new Error(`The type '${type}' specified is not valid.`);
        }
    }
}