## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|399,440|200109|
|[True conditional] Using constructor name|312,658|156330|
|[True conditional] Check if property is valid then instanceof |314,085|157043|
|[False conditional] Using instanceof only|39,975,262|19990829|
|[False conditional] Using constructor name|99,592,605|49806727|
|[False conditional] Check if property is valid then instanceof |99,458,813|49733050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":399440.7569907063,"samples":200109},{"name":"[True conditional] Using constructor name","opsSec":312658.8500407496,"samples":156330},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":314085.25247709913,"samples":157043},{"name":"[False conditional] Using instanceof only","opsSec":39975262.43771312,"samples":19990829},{"name":"[False conditional] Using constructor name","opsSec":99592605.28400984,"samples":49806727},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99458813.24950609,"samples":49733050}]}-->
