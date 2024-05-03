## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|910,314,326|97|
|Getter|102,117,027|95|
|Method|912,526,244|96|
|DefineProperty (getter)|911,934,759|100|
|DefineProperty (getter & enumerable=false)|102,219,107|98|
|DefineProperty (getter & configurable=false)|912,296,204|99|
|DefineProperty (getter & enumerable=false & configurable=false)|102,214,175|96|
|DefineProperty (writable)|913,255,194|98|
|DefineProperty (writable & enumerable=false)|306,417,552|35|
|DefineProperty (writable & enumerable=false & configurable=false)|166,501,320|84|
|DefineProperties (getter)|65,630,052|90|
|DefineProperties (getter & enumerable=false)|102,250,027|97|
|DefineProperties (getter & enumerable=false & configurable=false)|101,927,769|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:40:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":910314325.8016617,"samples":9},{"name":"Getter","opsSec":102117026.75637421,"samples":7},{"name":"Method","opsSec":912526244.1886034,"samples":7},{"name":"DefineProperty (getter)","opsSec":911934758.7746438,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102219106.98621657,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":912296203.5825781,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102214175.2174896,"samples":6},{"name":"DefineProperty (writable)","opsSec":913255194.0527354,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":306417552.07888967,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":166501319.7186946,"samples":5},{"name":"DefineProperties (getter)","opsSec":65630052.35814805,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":102250026.7228111,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":101927769.22711046,"samples":8}]}-->
