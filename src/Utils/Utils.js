
class Utils {
    // prevent functions from running too quickly, adding some interval between
    // every function call  
    debounce = (func, timeout = 1500) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        }
    }
}

export default new Utils();