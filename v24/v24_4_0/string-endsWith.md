## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,426,730|41213371|
|(short string) (true) String#slice and strict comparison|51,274,369|25640247|
|(long string) (true) String#endsWith|59,051,367|29529159|
|(long string) (true) String#slice and strict comparison|46,624,826|23314676|
|(short string) (false) String#endsWith|90,717,444|45394488|
|(short string) (false) String#slice and strict comparison|52,315,908|26162544|
|(long string) (false) String#endsWith|82,375,637|41188149|
|(long string) (false) String#slice and strict comparison|46,533,397|23271216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:44:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41213371,"opsSec":82426730.62511116},{"name":"(short string) (true) String#slice and strict comparison","samples":25640247,"opsSec":51274369.99434535},{"name":"(long string) (true) String#endsWith","samples":29529159,"opsSec":59051367.77211596},{"name":"(long string) (true) String#slice and strict comparison","samples":23314676,"opsSec":46624826.87405256},{"name":"(short string) (false) String#endsWith","samples":45394488,"opsSec":90717444.02534181},{"name":"(short string) (false) String#slice and strict comparison","samples":26162544,"opsSec":52315908.02298739},{"name":"(long string) (false) String#endsWith","samples":41188149,"opsSec":82375637.34738846},{"name":"(long string) (false) String#slice and strict comparison","samples":23271216,"opsSec":46533397.913062364}]}-->
