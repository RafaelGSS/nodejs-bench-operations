## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,712,693|7356347|
|Setter|5,950,622|2975312|
|Method|14,704,864|7352433|
|DefineProperty (setter)|14,973,781|7486891|
|DefineProperty (setter & enumerable=false)|5,962,052|2981027|
|DefineProperty (setter & configurable=false)|5,992,316|2996159|
|DefineProperty (setter & enumerable=false & configurable=false)|6,040,636|3020319|
|DefineProperty (writable)|14,621,531|7310766|
|DefineProperty (writable & enumerable=false)|14,702,740|7351371|
|DefineProperty (writable & enumerable=false & configurable=false)|14,641,900|7320951|
|DefineProperties (setter)|14,865,137|7432569|
|DefineProperties (setter & enumerable=false)|6,002,733|3001367|
|DefineProperties (setter & enumerable=false & configurable=false)|5,984,869|2992435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14712693.676255973,"samples":7356347},{"name":"Setter","opsSec":5950622.5004825415,"samples":2975312},{"name":"Method","opsSec":14704864.50013755,"samples":7352433},{"name":"DefineProperty (setter)","opsSec":14973781.071438087,"samples":7486891},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5962052.903040197,"samples":2981027},{"name":"DefineProperty (setter & configurable=false)","opsSec":5992316.525921986,"samples":2996159},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6040636.961102828,"samples":3020319},{"name":"DefineProperty (writable)","opsSec":14621531.386032714,"samples":7310766},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14702740.559057124,"samples":7351371},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14641900.682616062,"samples":7320951},{"name":"DefineProperties (setter)","opsSec":14865137.049286347,"samples":7432569},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6002733.0034450935,"samples":3001367},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5984869.54504647,"samples":2992435}]}-->
