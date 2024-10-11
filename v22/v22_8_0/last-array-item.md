## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,920,965|61908632|
|Length = 10_000 - Array.at|95,061,048|47594847|
|Length = 1_000_000 - Array.at|85,667,359|42871850|
|Length = 100 - Array[length - 1]|94,578,018|47293318|
|Length = 10_000 - Array[length - 1]|94,460,276|47241069|
|Length = 1_000_000 - Array[length - 1]|93,783,213|46905238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121920965.53108644,"samples":61908632},{"name":"Length = 10_000 - Array.at","opsSec":95061048.64335935,"samples":47594847},{"name":"Length = 1_000_000 - Array.at","opsSec":85667359.41733715,"samples":42871850},{"name":"Length = 100 - Array[length - 1]","opsSec":94578018.42927282,"samples":47293318},{"name":"Length = 10_000 - Array[length - 1]","opsSec":94460276.3025731,"samples":47241069},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93783213.96996464,"samples":46905238}]}-->
