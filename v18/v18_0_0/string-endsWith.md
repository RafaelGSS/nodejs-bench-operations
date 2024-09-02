## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,512,535|7256268|
|(short string) (true) String#slice and strict comparison|15,180,412|7590207|
|(long string) (true) String#endsWith|14,438,994|7219498|
|(long string) (true) String#slice and strict comparison|14,789,636|7394819|
|(short string) (false) String#endsWith|15,852,182|7926092|
|(short string) (false) String#slice and strict comparison|15,025,373|7512687|
|(long string) (false) String#endsWith|14,402,472|7201237|
|(long string) (false) String#slice and strict comparison|14,808,461|7404231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:54:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14512535.925068114,"samples":7256268},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15180412.818583772,"samples":7590207},{"name":"(long string) (true) String#endsWith","opsSec":14438994.312194781,"samples":7219498},{"name":"(long string) (true) String#slice and strict comparison","opsSec":14789636.973457083,"samples":7394819},{"name":"(short string) (false) String#endsWith","opsSec":15852182.912107522,"samples":7926092},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15025373.556015195,"samples":7512687},{"name":"(long string) (false) String#endsWith","opsSec":14402472.851066256,"samples":7201237},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14808461.799086088,"samples":7404231}]}-->
