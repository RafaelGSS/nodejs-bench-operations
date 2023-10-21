## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|593,545,205|95|
|Getter|66,870,875|93|
|Method|594,231,503|98|
|DefineProperty (getter)|592,588,037|97|
|DefineProperty (getter & enumerable=false)|67,195,089|94|
|DefineProperty (getter & configurable=false)|595,446,568|95|
|DefineProperty (getter & enumerable=false & configurable=false)|65,918,814|95|
|DefineProperty (writable)|593,399,655|95|
|DefineProperty (writable & enumerable=false)|591,891,404|97|
|DefineProperty (writable & enumerable=false & configurable=false)|204,713,370|35|
|DefineProperties (getter)|40,600,637|82|
|DefineProperties (getter & enumerable=false)|67,104,780|94|
|DefineProperties (getter & enumerable=false & configurable=false)|66,575,057|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:20:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":593545204.5405294,"samples":6},{"name":"Getter","opsSec":66870874.861909494,"samples":5},{"name":"Method","opsSec":594231502.9500427,"samples":7},{"name":"DefineProperty (getter)","opsSec":592588036.9047085,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":67195088.98912974,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":595446568.3913795,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":65918814.04758675,"samples":5},{"name":"DefineProperty (writable)","opsSec":593399655.2610136,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591891404.0839648,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":204713369.58736116,"samples":6},{"name":"DefineProperties (getter)","opsSec":40600636.53121484,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":67104779.99141675,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":66575057.49135873,"samples":5}]}-->
