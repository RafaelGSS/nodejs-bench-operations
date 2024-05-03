## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,024,719|94|
|Function returning explicitly undefined|2,003,660|94|
|Function returning implicitly undefined|2,032,259|93|
|Function returning string|1,996,076|99|
|Function returning integer|2,054,771|99|
|Function returning float|2,036,496|99|
|Function returning functions|1,979,925|95|
|Function returning arrow functions|1,982,111|97|
|Function returning empty object|2,033,213|96|
|Function returning empty array|2,028,702|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:17:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2024718.6728395568,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2003660.4789276717,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2032258.6512501799,"samples":5},{"name":"Function returning string","opsSec":1996076.0919568685,"samples":5},{"name":"Function returning integer","opsSec":2054771.3177087558,"samples":6},{"name":"Function returning float","opsSec":2036496.005178739,"samples":6},{"name":"Function returning functions","opsSec":1979924.6920675153,"samples":5},{"name":"Function returning arrow functions","opsSec":1982111.1688562313,"samples":5},{"name":"Function returning empty object","opsSec":2033212.9768747815,"samples":5},{"name":"Function returning empty array","opsSec":2028701.553390455,"samples":7}]}-->
