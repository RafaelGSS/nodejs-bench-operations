## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,282,909|50146334|
|Getter|53,318,684|26659351|
|Method|101,424,312|50712167|
|DefineProperty (getter)|102,400,814|51201405|
|DefineProperty (getter & enumerable=false)|54,152,989|27076794|
|DefineProperty (getter & configurable=false)|99,304,310|49652163|
|DefineProperty (getter & enumerable=false & configurable=false)|53,712,337|26872468|
|DefineProperty (writable)|99,249,984|49631755|
|DefineProperty (writable & enumerable=false)|101,268,113|50644182|
|DefineProperty (writable & enumerable=false & configurable=false)|97,598,988|48799501|
|DefineProperties (getter)|53,890,213|26945114|
|DefineProperties (getter & enumerable=false)|54,055,511|27028335|
|DefineProperties (getter & enumerable=false & configurable=false)|53,884,964|26949767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:46:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":50146334,"opsSec":100282909.87117207},{"name":"Getter","samples":26659351,"opsSec":53318684.19155947},{"name":"Method","samples":50712167,"opsSec":101424312.90374292},{"name":"DefineProperty (getter)","samples":51201405,"opsSec":102400814.61772636},{"name":"DefineProperty (getter & enumerable=false)","samples":27076794,"opsSec":54152989.1762457},{"name":"DefineProperty (getter & configurable=false)","samples":49652163,"opsSec":99304310.1113104},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26872468,"opsSec":53712337.12320254},{"name":"DefineProperty (writable)","samples":49631755,"opsSec":99249984.21215157},{"name":"DefineProperty (writable & enumerable=false)","samples":50644182,"opsSec":101268113.01036885},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48799501,"opsSec":97598988.72653754},{"name":"DefineProperties (getter)","samples":26945114,"opsSec":53890213.88076397},{"name":"DefineProperties (getter & enumerable=false)","samples":27028335,"opsSec":54055511.04984309},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26949767,"opsSec":53884964.15231279}]}-->
