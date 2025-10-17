## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,350,371|45178517|
|(short string) (true) String#slice and strict comparison|60,661,352|30343059|
|(long string) (true) String#endsWith|60,462,944|30231482|
|(long string) (true) String#slice and strict comparison|54,541,952|27270985|
|(short string) (false) String#endsWith|94,671,441|47352119|
|(short string) (false) String#slice and strict comparison|60,575,136|30287862|
|(long string) (false) String#endsWith|86,847,465|43431348|
|(long string) (false) String#slice and strict comparison|54,436,681|27223340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:16:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45178517,"opsSec":90350371.38291347},{"name":"(short string) (true) String#slice and strict comparison","samples":30343059,"opsSec":60661352.153724305},{"name":"(long string) (true) String#endsWith","samples":30231482,"opsSec":60462944.772783555},{"name":"(long string) (true) String#slice and strict comparison","samples":27270985,"opsSec":54541952.21932357},{"name":"(short string) (false) String#endsWith","samples":47352119,"opsSec":94671441.16198114},{"name":"(short string) (false) String#slice and strict comparison","samples":30287862,"opsSec":60575136.90577312},{"name":"(long string) (false) String#endsWith","samples":43431348,"opsSec":86847465.38630028},{"name":"(long string) (false) String#slice and strict comparison","samples":27223340,"opsSec":54436681.7235412}]}-->
