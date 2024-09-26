## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,314,828|61670542|
|Length = 10_000 - Array.at|98,871,669|49436574|
|Length = 1_000_000 - Array.at|97,082,047|48541038|
|Length = 100 - Array[length - 1]|96,867,069|48444675|
|Length = 10_000 - Array[length - 1]|97,221,546|48610784|
|Length = 1_000_000 - Array[length - 1]|95,320,455|47660593|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:21:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123314828.30001768,"samples":61670542},{"name":"Length = 10_000 - Array.at","opsSec":98871669.27531432,"samples":49436574},{"name":"Length = 1_000_000 - Array.at","opsSec":97082047.45787805,"samples":48541038},{"name":"Length = 100 - Array[length - 1]","opsSec":96867069.99269927,"samples":48444675},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97221546.02793059,"samples":48610784},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95320455.08275042,"samples":47660593}]}-->
