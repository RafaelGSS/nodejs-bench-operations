## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|310,796,932|93|
|(short string) (true) String#slice and strict comparison|911,416,535|95|
|(long string) (true) String#startsWith|195,324,562|97|
|(long string) (true) String#slice and strict comparison|910,622,623|100|
|(short string) (false) String#startsWith|871,753,536|97|
|(short string) (false) String#slice and strict comparison|910,088,978|96|
|(long string) (false) String#startsWith|870,965,072|95|
|(long string) (false) String#slice and strict comparison|910,221,753|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:20:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":310796931.67328256,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":911416534.7743675,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":195324561.58460835,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":910622622.5434513,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":871753535.7963619,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":910088978.2518274,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":870965072.320636,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":910221752.8384211,"samples":6}]}-->
