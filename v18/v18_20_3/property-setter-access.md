## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,706,638|7353320|
|Setter|5,802,918|2901460|
|Method|14,869,103|7434552|
|DefineProperty (setter)|14,972,602|7486302|
|DefineProperty (setter & enumerable=false)|5,783,242|2891622|
|DefineProperty (setter & configurable=false)|5,683,595|2841799|
|DefineProperty (setter & enumerable=false & configurable=false)|5,705,525|2852763|
|DefineProperty (writable)|14,581,770|7290886|
|DefineProperty (writable & enumerable=false)|14,542,654|7271328|
|DefineProperty (writable & enumerable=false & configurable=false)|14,699,133|7349567|
|DefineProperties (setter)|14,647,750|7323876|
|DefineProperties (setter & enumerable=false)|5,777,879|2888940|
|DefineProperties (setter & enumerable=false & configurable=false)|5,764,124|2882063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14706638.097758064,"samples":7353320},{"name":"Setter","opsSec":5802918.106518399,"samples":2901460},{"name":"Method","opsSec":14869103.780981109,"samples":7434552},{"name":"DefineProperty (setter)","opsSec":14972602.445654243,"samples":7486302},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5783242.134332079,"samples":2891622},{"name":"DefineProperty (setter & configurable=false)","opsSec":5683595.958812607,"samples":2841799},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5705525.366757582,"samples":2852763},{"name":"DefineProperty (writable)","opsSec":14581770.645932239,"samples":7290886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14542654.161063148,"samples":7271328},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14699133.24022528,"samples":7349567},{"name":"DefineProperties (setter)","opsSec":14647750.620543122,"samples":7323876},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5777879.967928822,"samples":2888940},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5764124.740048024,"samples":2882063}]}-->
