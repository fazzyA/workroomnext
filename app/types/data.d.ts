// [{"r": 5, "c": 4, "v": {"m": "$50,000", "v": "$50,000"}},
//  {"r": 5, "c": 4, "v": {"m": "$50,000", "v": "$50,000"}}
// ]
// with formula
// {"r": 5, "c": 4, ct: {fa: 'General', t: 'g'}, f: "=SUM(B1:B4)", m: "14", v: 14}

export interface FileData {
    c: string | number;
    r: string | number;
    v: string | Value;
  }
export interface Value {
    m: string;
    v: string;
  }
  