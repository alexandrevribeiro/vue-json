import PropType from './JsonPropTypeEnum'
import JsonObjectMetadata from './JsonObjectMetadata'

/**
 * Represents the metadata of a JSON property
 */
export default class JsonPropMetadata {

    constructor(name: string, type: PropType) {
        this.name = name,
        this.type = type;
    }

    /** 
     * Property name
     */
    name: string
    
    /**
     * Property type
     */
    type: PropType
    
    /**
     * Type of an array item for when the "type" is "array".
     */
    arrayItemType: PropType

    /**
     * Metadata of the properties of a sub-object.
     * This is when either the "type" or "arrayItemType" is "object".
     */
    objectProps: JsonObjectMetadata
}