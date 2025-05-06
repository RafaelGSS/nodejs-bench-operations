## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,365,271|50217485|
|Length = 10_000 - Array.at|95,889,524|47995019|
|Length = 1_000_000 - Array.at|99,822,456|49924847|
|Length = 100 - Array[length - 1]|96,199,705|48835077|
|Length = 10_000 - Array[length - 1]|97,683,448|48862842|
|Length = 1_000_000 - Array[length - 1]|99,114,885|49564449|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50217485,"opsSec":100365271.93909352},{"name":"Length = 10_000 - Array.at","samples":47995019,"opsSec":95889524.29928091},{"name":"Length = 1_000_000 - Array.at","samples":49924847,"opsSec":99822456.84371544},{"name":"Length = 100 - Array[length - 1]","samples":48835077,"opsSec":96199705.14339468},{"name":"Length = 10_000 - Array[length - 1]","samples":48862842,"opsSec":97683448.99789058},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49564449,"opsSec":99114885.53394276}]}-->
