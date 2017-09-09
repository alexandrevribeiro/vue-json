import PropType from './JsonPropTypeEnum'

export default class JsonPropMetadata {

    constructor(type: PropType) {
        this.type = type;
    }
    
    type: PropType
    
    itemType: PropType

    objectProps: JsonPropMetadata
}