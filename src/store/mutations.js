
import { INCREMENT } from './mutations-type';

export default {
    [INCREMENT] (store, val) {
        store.count ++;
    }
}