## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,217,953|44109024|
|(short string) (true) String#slice and strict comparison|53,856,507|27704631|
|(long string) (true) String#endsWith|63,381,205|31690612|
|(long string) (true) String#slice and strict comparison|51,418,248|25710460|
|(short string) (false) String#endsWith|91,851,489|45925752|
|(short string) (false) String#slice and strict comparison|57,347,849|28679264|
|(long string) (false) String#endsWith|80,640,375|40469676|
|(long string) (false) String#slice and strict comparison|50,329,970|25176992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44109024,"opsSec":88217953.60678965},{"name":"(short string) (true) String#slice and strict comparison","samples":27704631,"opsSec":53856507.16166175},{"name":"(long string) (true) String#endsWith","samples":31690612,"opsSec":63381205.61945037},{"name":"(long string) (true) String#slice and strict comparison","samples":25710460,"opsSec":51418248.8219737},{"name":"(short string) (false) String#endsWith","samples":45925752,"opsSec":91851489.30376172},{"name":"(short string) (false) String#slice and strict comparison","samples":28679264,"opsSec":57347849.945035934},{"name":"(long string) (false) String#endsWith","samples":40469676,"opsSec":80640375.0676639},{"name":"(long string) (false) String#slice and strict comparison","samples":25176992,"opsSec":50329970.06138462}]}-->
