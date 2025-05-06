## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,171,781|42085913|
|(short string) (true) String#slice and strict comparison|55,718,146|27859082|
|(long string) (true) String#endsWith|65,260,507|32630263|
|(long string) (true) String#slice and strict comparison|51,401,809|25701003|
|(short string) (false) String#endsWith|90,687,296|45357770|
|(short string) (false) String#slice and strict comparison|56,601,044|28304153|
|(long string) (false) String#endsWith|82,190,875|41095453|
|(long string) (false) String#slice and strict comparison|50,473,814|25240527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42085913,"opsSec":84171781.55729935},{"name":"(short string) (true) String#slice and strict comparison","samples":27859082,"opsSec":55718146.05875697},{"name":"(long string) (true) String#endsWith","samples":32630263,"opsSec":65260507.46601588},{"name":"(long string) (true) String#slice and strict comparison","samples":25701003,"opsSec":51401809.953496836},{"name":"(short string) (false) String#endsWith","samples":45357770,"opsSec":90687296.34842525},{"name":"(short string) (false) String#slice and strict comparison","samples":28304153,"opsSec":56601044.08604375},{"name":"(long string) (false) String#endsWith","samples":41095453,"opsSec":82190875.91813941},{"name":"(long string) (false) String#slice and strict comparison","samples":25240527,"opsSec":50473814.237980954}]}-->
