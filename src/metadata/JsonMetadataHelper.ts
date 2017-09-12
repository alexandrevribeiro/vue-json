
import JsonObjectMetadata from './JsonObjectMetadata'
import JsonPropMetadata from './JsonPropMetadata'
import JsonPropType from './JsonPropTypeEnum'
import ObjectPropNames from './JsonObjectPropNames'

export default class JsonMetadataHelper {

    /**
     * Converts the specified jsonObject in a new instance of "JsonMetadata".
     * @param jsonObject Metadata json
     */
    public static convertToJsonMetadata(jsonObject: object) : JsonObjectMetadata {

        if (Array.isArray(jsonObject))
            throw new Error('Array is not a valid Json Schema.');

        return JsonMetadataHelper.getJsonObjectMetadata(jsonObject);
    }

    /**
     * Gets a "JsonObjectMetadata" from the specified "jsonObject"
     * @param jsonObject 
     */
    private static getJsonObjectMetadata(jsonObject: object) : JsonObjectMetadata {

        let jsonMetadata = new JsonObjectMetadata();

        // Iterates through the Json object properties
        Object.entries(jsonObject).forEach(([key, value]) => {

            switch (typeof(value)) {
                case 'string':
                    
                    let propType = JsonMetadataHelper.getPropType(value);
                    let propMetadata = new JsonPropMetadata(key, propType);
                    
                    // Adds a new "JsonPropMetadata" for the current prop
                    jsonMetadata.propsMetadata.push(propMetadata);

                    break;
            
                case 'object':
                    if (Array.isArray(value))
                        throw new Error(`Json property of the type array is not supported. Property: '${key}'.`);

                    let objPropMetadata = JsonMetadataHelper
                        .getJsonPRopMetadataFromObjProperty(key, value);

                    // Adds a new "JsonPropMetadata" for the current prop
                    jsonMetadata.propsMetadata.push(objPropMetadata);

                    break;
                default:
                    throw new Error(`Json property of '${typeof(value)}' type is not supported. Property: '${key}'.`);
            }
        });

        return jsonMetadata;
    }

    /**
     * Gets a new "JsonPropMetadata" from the specified parameters
     * @param propName 
     * @param objectValue 
     */
    private static getJsonPRopMetadataFromObjProperty(
        propName: string, objectValue: object) : JsonPropMetadata {

        let keys = Object.keys(objectValue);

        if (!keys.includes(ObjectPropNames.TYPE))
            throw new Error(`The '${ObjectPropNames.TYPE}' property is required when the value is an object. Parent property: '${propName}'.`);

        // Gets the type
        let typeValue = objectValue[ObjectPropNames.TYPE];
        let propType: JsonPropType = JsonMetadataHelper.getPropType(typeValue);

        // Creates the "JsonPropMetadata"
        let jsonPropMetadata = new JsonPropMetadata(propName, propType);

        const objectPropsWasSpecified = keys.includes(ObjectPropNames.OBJECT_PROPS);

        // Validations for when the type is array
        if (propType == JsonPropType.Array) {
            
            // Validates if the "item-type" was specified
            if (!keys.includes(ObjectPropNames.ITEM_TYPE))
                throw new Error(`The '${ObjectPropNames.ITEM_TYPE}' property is required when the '${ObjectPropNames.TYPE}' is 'array'. Parent property: '${propName}'.`);

            // Sets the "arrayItemType"
            let itemTypeValue = objectValue[ObjectPropNames.ITEM_TYPE];
            jsonPropMetadata.arrayItemType = JsonMetadataHelper
                .getPropType(itemTypeValue);            

            // Validates if the "object-props" was specified
            if (jsonPropMetadata.arrayItemType == JsonPropType.Object && !objectPropsWasSpecified)
                throw new Error(`The '${ObjectPropNames.OBJECT_PROPS}' property is required when the '${ObjectPropNames.ITEM_TYPE}' is 'object'. Parent property: '${propName}'.`);            
        } 
        else if (propType == JsonPropType.Object && !objectPropsWasSpecified) {
            throw new Error(`The '${ObjectPropNames.OBJECT_PROPS}' property is required when the '${ObjectPropNames.TYPE}' is 'object'. Parent property: '${propName}'.`);            
        }

        // Sets the "objectProps" when it's specified
        if (objectPropsWasSpecified) {            
            var objectPropsJsonMetadata = JsonMetadataHelper
                .getJsonObjectMetadata(objectValue[ObjectPropNames.OBJECT_PROPS]);

            jsonPropMetadata.objectProps = objectPropsJsonMetadata;
        }

        return jsonPropMetadata;
    }

    /**
     * Gets a "JsonPropType" from the specified type.
     * @param type Json schema property type
     */
    private static getPropType(type: string) : JsonPropType {

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