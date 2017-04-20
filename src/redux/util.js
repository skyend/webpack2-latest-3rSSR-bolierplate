export function keyCategorizer( _groupName ){
    let gn = _groupName;
    return function(_subname){
        let uniqueName = `${gn}(${_subname})`;
        if( typeof Symbol ){
            return Symbol(uniqueName);
        }
        return uniqueName;
    }
}