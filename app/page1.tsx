// 'use client'

// import { useRef, useState } from 'react';
// import UniverSheet from './components/UniverSheet';
// import { DEFAULT_WORKBOOK_DATA } from './assets/default-workbook-data';

// function Home (this: any) {
//   const [data] = useState(DEFAULT_WORKBOOK_DATA);
//   const univerRef = useRef();

//   return (
//     <div id="">
//       <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//         <div className="bar">
//           <button
//             onClick={() => {
//               // console.log(univerRef.current?.getData());
//               console.log(univerRef.current ?? "hiii");
//             }}
//           >
//             Get Data
//           </button>
//         </div>
//         {/* <UniverSheet style={{ flex: 1 }} ref={univerRef} data={data} /> */}
//         <UniverSheet ref={univerRef} data={data} />
//       </div>
//     </div>
//   );
// }

// export default Home;
