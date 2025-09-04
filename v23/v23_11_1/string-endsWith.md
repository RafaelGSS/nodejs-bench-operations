## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|85,266,830|42639328|
|(short string) (true) String#slice and strict comparison|55,355,637|27687034|
|(long string) (true) String#endsWith|67,545,634|33773443|
|(long string) (true) String#slice and strict comparison|51,666,407|25835945|
|(short string) (false) String#endsWith|90,906,022|45453404|
|(short string) (false) String#slice and strict comparison|56,112,735|28061899|
|(long string) (false) String#endsWith|84,687,716|42343868|
|(long string) (false) String#slice and strict comparison|51,241,982|25640131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:35:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42639328,"opsSec":85266830.5138097},{"name":"(short string) (true) String#slice and strict comparison","samples":27687034,"opsSec":55355637.00852419},{"name":"(long string) (true) String#endsWith","samples":33773443,"opsSec":67545634.78466125},{"name":"(long string) (true) String#slice and strict comparison","samples":25835945,"opsSec":51666407.05755024},{"name":"(short string) (false) String#endsWith","samples":45453404,"opsSec":90906022.93558593},{"name":"(short string) (false) String#slice and strict comparison","samples":28061899,"opsSec":56112735.93523773},{"name":"(long string) (false) String#endsWith","samples":42343868,"opsSec":84687716.52182521},{"name":"(long string) (false) String#slice and strict comparison","samples":25640131,"opsSec":51241982.80406985}]}-->
