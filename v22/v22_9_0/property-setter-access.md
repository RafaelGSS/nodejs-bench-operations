## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,495,110|68758296|
|Setter|11,370,876|5692391|
|Method|93,822,013|46929923|
|DefineProperty (setter)|93,696,723|46872533|
|DefineProperty (setter & enumerable=false)|11,033,772|5516890|
|DefineProperty (setter & configurable=false)|11,150,028|5575019|
|DefineProperty (setter & enumerable=false & configurable=false)|11,268,250|5634128|
|DefineProperty (writable)|100,711,707|50488189|
|DefineProperty (writable & enumerable=false)|100,326,458|50174987|
|DefineProperty (writable & enumerable=false & configurable=false)|100,715,151|50357582|
|DefineProperties (setter)|98,175,070|49096222|
|DefineProperties (setter & enumerable=false)|11,477,760|5738884|
|DefineProperties (setter & enumerable=false & configurable=false)|11,392,722|5696553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:38:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":137495110.86383954,"samples":68758296},{"name":"Setter","opsSec":11370876.396062985,"samples":5692391},{"name":"Method","opsSec":93822013.77409782,"samples":46929923},{"name":"DefineProperty (setter)","opsSec":93696723.17567751,"samples":46872533},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11033772.761845067,"samples":5516890},{"name":"DefineProperty (setter & configurable=false)","opsSec":11150028.433275605,"samples":5575019},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11268250.568703227,"samples":5634128},{"name":"DefineProperty (writable)","opsSec":100711707.23055129,"samples":50488189},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100326458.48139656,"samples":50174987},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100715151.91418178,"samples":50357582},{"name":"DefineProperties (setter)","opsSec":98175070.93944657,"samples":49096222},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11477760.516500143,"samples":5738884},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11392722.908299485,"samples":5696553}]}-->
