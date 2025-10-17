## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,629,836|41317262|
|(short string) (true) String#slice and strict comparison|51,550,341|25801548|
|(long string) (true) String#endsWith|58,517,005|29258508|
|(long string) (true) String#slice and strict comparison|44,270,771|22135389|
|(short string) (false) String#endsWith|92,290,206|46145108|
|(short string) (false) String#slice and strict comparison|53,096,661|26549944|
|(long string) (false) String#endsWith|84,747,447|42373730|
|(long string) (false) String#slice and strict comparison|44,354,230|22177123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:18:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41317262,"opsSec":82629836.07887991},{"name":"(short string) (true) String#slice and strict comparison","samples":25801548,"opsSec":51550341.545576595},{"name":"(long string) (true) String#endsWith","samples":29258508,"opsSec":58517005.93507498},{"name":"(long string) (true) String#slice and strict comparison","samples":22135389,"opsSec":44270771.3593843},{"name":"(short string) (false) String#endsWith","samples":46145108,"opsSec":92290206.58639893},{"name":"(short string) (false) String#slice and strict comparison","samples":26549944,"opsSec":53096661.52826557},{"name":"(long string) (false) String#endsWith","samples":42373730,"opsSec":84747447.28788291},{"name":"(long string) (false) String#slice and strict comparison","samples":22177123,"opsSec":44354230.121185616}]}-->
