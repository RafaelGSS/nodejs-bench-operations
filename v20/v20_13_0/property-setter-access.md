## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,720,938|9860470|
|Setter|6,830,514|3415258|
|Method|19,484,299|9742150|
|DefineProperty (setter)|19,677,560|9838781|
|DefineProperty (setter & enumerable=false)|6,861,004|3430503|
|DefineProperty (setter & configurable=false)|6,775,388|3387695|
|DefineProperty (setter & enumerable=false & configurable=false)|6,948,691|3474346|
|DefineProperty (writable)|19,708,893|9854447|
|DefineProperty (writable & enumerable=false)|19,493,213|9746607|
|DefineProperty (writable & enumerable=false & configurable=false)|19,729,249|9864625|
|DefineProperties (setter)|18,721,195|9360598|
|DefineProperties (setter & enumerable=false)|6,587,079|3293540|
|DefineProperties (setter & enumerable=false & configurable=false)|6,726,083|3363042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:10:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19720938.50123082,"samples":9860470},{"name":"Setter","opsSec":6830514.674865391,"samples":3415258},{"name":"Method","opsSec":19484299.53237814,"samples":9742150},{"name":"DefineProperty (setter)","opsSec":19677560.66198856,"samples":9838781},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6861004.833647004,"samples":3430503},{"name":"DefineProperty (setter & configurable=false)","opsSec":6775388.888814303,"samples":3387695},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6948691.72203439,"samples":3474346},{"name":"DefineProperty (writable)","opsSec":19708893.842444807,"samples":9854447},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19493213.688282646,"samples":9746607},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19729249.99947791,"samples":9864625},{"name":"DefineProperties (setter)","opsSec":18721195.289067004,"samples":9360598},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6587079.776007005,"samples":3293540},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6726083.4753771555,"samples":3363042}]}-->
