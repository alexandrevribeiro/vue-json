import PropType from './JsonPropTypeEnum'
import JsonObjectMetadata from './JsonObjectMetadata'

export default class JsonPropMetadata {

    constructor(name: string, type: PropType) {
        this.name = name,
        this.type = type;
    }

    name: string
    
    type: PropType
    
    itemType: PropType

    objectProps: JsonObjectMetadata
}