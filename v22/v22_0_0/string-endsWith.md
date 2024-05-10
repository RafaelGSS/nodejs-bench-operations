## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,835,090|7917546|
|(short string) (true) String#slice and strict comparison|16,185,189|8092595|
|(long string) (true) String#endsWith|14,783,574|7391788|
|(long string) (true) String#slice and strict comparison|16,112,723|8056362|
|(short string) (false) String#endsWith|15,991,889|7995946|
|(short string) (false) String#slice and strict comparison|16,177,341|8088671|
|(long string) (false) String#endsWith|15,430,753|7715378|
|(long string) (false) String#slice and strict comparison|16,164,346|8082174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:15:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15835090.543204792,"samples":7917546},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16185189.35255314,"samples":8092595},{"name":"(long string) (true) String#endsWith","opsSec":14783574.31468567,"samples":7391788},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16112723.387703585,"samples":8056362},{"name":"(short string) (false) String#endsWith","opsSec":15991889.952957107,"samples":7995946},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16177341.191030499,"samples":8088671},{"name":"(long string) (false) String#endsWith","opsSec":15430753.932234822,"samples":7715378},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16164346.448357703,"samples":8082174}]}-->
