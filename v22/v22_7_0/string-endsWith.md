## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,910,869|7455435|
|(short string) (true) String#slice and strict comparison|13,708,285|6854143|
|(long string) (true) String#endsWith|14,388,496|7194249|
|(long string) (true) String#slice and strict comparison|13,511,743|6755872|
|(short string) (false) String#endsWith|14,996,436|7498219|
|(short string) (false) String#slice and strict comparison|13,399,809|6699905|
|(long string) (false) String#endsWith|14,529,436|7264719|
|(long string) (false) String#slice and strict comparison|12,798,895|6399448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:05:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14910869.940253759,"samples":7455435},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13708285.533922324,"samples":6854143},{"name":"(long string) (true) String#endsWith","opsSec":14388496.73384892,"samples":7194249},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13511743.675689926,"samples":6755872},{"name":"(short string) (false) String#endsWith","opsSec":14996436.770452164,"samples":7498219},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13399809.035174813,"samples":6699905},{"name":"(long string) (false) String#endsWith","opsSec":14529436.604794094,"samples":7264719},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12798895.667402556,"samples":6399448}]}-->
