## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,459,440|8229721|
|Setter|6,005,754|3002878|
|Method|16,471,659|8235830|
|DefineProperty (setter)|17,741,581|8870791|
|DefineProperty (setter & enumerable=false)|6,151,788|3075895|
|DefineProperty (setter & configurable=false)|6,163,987|3081994|
|DefineProperty (setter & enumerable=false & configurable=false)|6,203,825|3101913|
|DefineProperty (writable)|18,199,112|9099557|
|DefineProperty (writable & enumerable=false)|18,317,469|9158735|
|DefineProperty (writable & enumerable=false & configurable=false)|16,401,286|8200644|
|DefineProperties (setter)|16,359,801|8179901|
|DefineProperties (setter & enumerable=false)|6,079,865|3039933|
|DefineProperties (setter & enumerable=false & configurable=false)|6,144,344|3072173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16459440.946471594,"samples":8229721},{"name":"Setter","opsSec":6005754.4745164355,"samples":3002878},{"name":"Method","opsSec":16471659.538928324,"samples":8235830},{"name":"DefineProperty (setter)","opsSec":17741581.680366654,"samples":8870791},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6151788.9665968595,"samples":3075895},{"name":"DefineProperty (setter & configurable=false)","opsSec":6163987.186383286,"samples":3081994},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6203825.205889973,"samples":3101913},{"name":"DefineProperty (writable)","opsSec":18199112.180181384,"samples":9099557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18317469.193889275,"samples":9158735},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16401286.621469954,"samples":8200644},{"name":"DefineProperties (setter)","opsSec":16359801.738883484,"samples":8179901},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6079865.513598915,"samples":3039933},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6144344.377734813,"samples":3072173}]}-->
