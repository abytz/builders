// import React from 'react'
// import {data5} from '../JSON/Data';

// function Package5() {
//   const [hide, setHide] = React.useState(false);
//   const [hide1, setHide1] = React.useState(false);
//   const [hide2, setHide2] = React.useState(false);
//   const [hide3, setHide3] = React.useState(false);
//   const [hide4, setHide4] = React.useState(false);
//   const [hide5, setHide5] = React.useState(false);
//   const [hide6, setHide6] = React.useState(false);
//   const [hide7, setHide7] = React.useState(false);
//   const [hide8, setHide8] = React.useState(false);
//   const [hide9, setHide9] = React.useState(false);
//   return (
//     <div>
//       <div className="row">
//         {data5.Product5.map((D) => {
//           return (
//             <div className="col-lg-4 col-md-6 col-xs-12">
//               <div className="shadow">
//                 <h6 className="bg-primary p-2 text-white text-center">
//                   {D.package}
//                 </h6>
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list0}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide === true ? (
//                       <i
//                         onClick={() => {
//                           setHide(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide === false ? (
//                       <i
//                         onClick={() => {
//                           setHide(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide === true ? (
//               <div className="">
//                   <p className="ml-5"><b >{D.list00}</b></p>
//                   <p className="ml-5"><b>{D.list000}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list1}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide1 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide1(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide1 === false ? (
//                       <i
//                         onClick={() => {setHide1(true)}}
//                         className="fa fa-plus"></i>) : ("")}
//                   </div>
//                 </div>
//                 {hide1 === true ? (
//              <div className="">
//                   <p className="ml-4"><b >{D.list11}</b></p>
//                   <p className="ml-4"><b>{D.list111}</b></p>
//                   <p className="ml-4"><b>{D.list1111}</b></p>
//                   <p className="ml-4"><b>{D.list11111}</b></p>
//                   <p className="ml-4"><b>{D.list111111}</b></p>
//                   <p className="ml-4"><b>{D.list1111111}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list2}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide2 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide2(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide2 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide2(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide2 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list22}</b></p>
//                   <p className="ml-4"><b>{D.list222}</b></p>
//                   <p className="ml-4"><b>{D.list2222}</b></p>
//                   <p className="ml-4"><b>{D.list22222}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list3}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide3 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide3(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide3 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide3(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide3 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list33}</b></p>
//                   <p className="ml-4"><b>{D.list333}</b></p>
//                   <p className="ml-4"><b>{D.list3333}</b></p>
//                   <p className="ml-4"><b>{D.list33333}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list4}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide4 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide4(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide4 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide4(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide4 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list44}</b></p>
//                   <p className="ml-4"><b>{D.list444}</b></p>
//                   <p className="ml-4"><b>{D.list4444}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list5}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide5 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide5(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide5 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide5(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide5 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list55}</b></p>
//                   <p className="ml-4"><b>{D.list555}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list6}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide6 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide6(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide6 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide6(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide6 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list66}</b></p>
//                   <p className="ml-4"><b>{D.list666}</b></p>
//                   <p className="ml-4"><b>{D.list6666}</b></p>
//                   <p className="ml-4"><b>{D.list66666}</b></p>
//                   <p className="ml-4"><b>{D.list666666}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list7}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide7 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide7(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide7 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide7(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide7 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list77}</b></p>
//                   <p className="ml-4"><b>{D.list777}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list8}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide8 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide8(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide8 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide8(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 {hide8 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list88}</b></p>
//                   <p className="ml-4"><b>{D.list888}</b></p>
//                   <p className="ml-4"><b>{D.list8888}</b></p>
//               </div>):""}
//                 <hr />
//                 <div className="row">
//                   <div className="col-lg-1 col-md-1 col-1"></div>
//                   <div className="col-lg-8 col-md-4 col-8">
//                     <p>{D.list9}</p>
//                   </div>
//                   <div className="col-lg-1 col-md-1 col-1">
//                     {hide9 === true ? (
//                       <i
//                         onClick={() => {
//                           setHide9(false);
//                         }}
//                         className="fa fa-minus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                     {hide9 === false ? (
//                       <i
//                         onClick={() => {
//                           setHide9(true);
//                         }}
//                         className="fa fa-plus"
//                       ></i>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//                 <hr />
//                 {hide9 === true ? (
//               <div className="">
//                   <p className="ml-4"><b >{D.list99}</b></p>
//               </div>):""}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     )
// }

// export default Package5
