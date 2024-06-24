## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,671,859|7835930|
|(short string) (true) String#slice and strict comparison|16,081,003|8040502|
|(long string) (true) String#startsWith|14,799,076|7399539|
|(long string) (true) String#slice and strict comparison|16,103,125|8051563|
|(short string) (false) String#startsWith|16,039,284|8019643|
|(short string) (false) String#slice and strict comparison|16,102,012|8051007|
|(long string) (false) String#startsWith|15,604,746|7802374|
|(long string) (false) String#slice and strict comparison|16,115,762|8057882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15671859.65521967,"samples":7835930},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16081003.903480714,"samples":8040502},{"name":"(long string) (true) String#startsWith","opsSec":14799076.105755087,"samples":7399539},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16103125.613441141,"samples":8051563},{"name":"(short string) (false) String#startsWith","opsSec":16039284.877145814,"samples":8019643},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16102012.77618874,"samples":8051007},{"name":"(long string) (false) String#startsWith","opsSec":15604746.377025215,"samples":7802374},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16115762.291886095,"samples":8057882}]}-->
