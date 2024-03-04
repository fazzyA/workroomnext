// [
//{"r": 5, "c": 4, "v": {"m": "$50,000", "v": "$50,000"}},
// {"r": 5, "c": 4, "v": {"m": "$50,000", "v": "$50,000"}}
//]
export interface FileData {
    c: string | number;
    r: string | number;
    v: string | Value;
  }
export interface Value {
    m: string;
    v: string;
  }
  