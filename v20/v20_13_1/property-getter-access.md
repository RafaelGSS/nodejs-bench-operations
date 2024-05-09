## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,893,449|9946725|
|Getter|16,031,760|8015881|
|Method|19,864,551|9932276|
|DefineProperty (getter)|19,974,259|9987130|
|DefineProperty (getter & enumerable=false)|16,125,119|8062560|
|DefineProperty (getter & configurable=false)|19,983,139|9991570|
|DefineProperty (getter & enumerable=false & configurable=false)|15,970,091|7985046|
|DefineProperty (writable)|20,001,298|10000650|
|DefineProperty (writable & enumerable=false)|19,966,973|9983487|
|DefineProperty (writable & enumerable=false & configurable=false)|19,940,209|9970105|
|DefineProperties (getter)|16,234,319|8117160|
|DefineProperties (getter & enumerable=false)|16,433,660|8216831|
|DefineProperties (getter & enumerable=false & configurable=false)|16,159,406|8079704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:52:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19893449.522535447,"samples":9946725},{"name":"Getter","opsSec":16031760.108186109,"samples":8015881},{"name":"Method","opsSec":19864551.84110109,"samples":9932276},{"name":"DefineProperty (getter)","opsSec":19974259.4410769,"samples":9987130},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16125119.000371225,"samples":8062560},{"name":"DefineProperty (getter & configurable=false)","opsSec":19983139.64032052,"samples":9991570},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":15970091.967966149,"samples":7985046},{"name":"DefineProperty (writable)","opsSec":20001298.44030713,"samples":10000650},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19966973.12171584,"samples":9983487},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19940209.282452837,"samples":9970105},{"name":"DefineProperties (getter)","opsSec":16234319.123094875,"samples":8117160},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16433660.19239027,"samples":8216831},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16159406.448840838,"samples":8079704}]}-->
