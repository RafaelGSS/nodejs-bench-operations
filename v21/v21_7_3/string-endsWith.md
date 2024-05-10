## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,567,376|7283689|
|(short string) (true) String#slice and strict comparison|15,231,253|7615627|
|(long string) (true) String#endsWith|14,136,945|7068473|
|(long string) (true) String#slice and strict comparison|15,240,708|7620355|
|(short string) (false) String#endsWith|15,123,365|7561683|
|(short string) (false) String#slice and strict comparison|15,370,006|7685004|
|(long string) (false) String#endsWith|14,940,208|7470105|
|(long string) (false) String#slice and strict comparison|15,426,120|7713061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:14:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14567376.922044268,"samples":7283689},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15231253.207975924,"samples":7615627},{"name":"(long string) (true) String#endsWith","opsSec":14136945.321414309,"samples":7068473},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15240708.018717766,"samples":7620355},{"name":"(short string) (false) String#endsWith","opsSec":15123365.818547716,"samples":7561683},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15370006.95484208,"samples":7685004},{"name":"(long string) (false) String#endsWith","opsSec":14940208.356643053,"samples":7470105},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15426120.364875583,"samples":7713061}]}-->
