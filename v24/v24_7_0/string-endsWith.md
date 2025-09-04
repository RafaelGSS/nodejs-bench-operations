## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|87,448,412|43724213|
|(short string) (true) String#slice and strict comparison|55,691,699|27846358|
|(long string) (true) String#endsWith|66,239,769|33163360|
|(long string) (true) String#slice and strict comparison|51,175,872|25587967|
|(short string) (false) String#endsWith|91,634,161|45821285|
|(short string) (false) String#slice and strict comparison|55,527,039|27766776|
|(long string) (false) String#endsWith|86,553,744|43281302|
|(long string) (false) String#slice and strict comparison|52,339,384|26177827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43724213,"opsSec":87448412.18315087},{"name":"(short string) (true) String#slice and strict comparison","samples":27846358,"opsSec":55691699.51510045},{"name":"(long string) (true) String#endsWith","samples":33163360,"opsSec":66239769.174677014},{"name":"(long string) (true) String#slice and strict comparison","samples":25587967,"opsSec":51175872.79365614},{"name":"(short string) (false) String#endsWith","samples":45821285,"opsSec":91634161.64932705},{"name":"(short string) (false) String#slice and strict comparison","samples":27766776,"opsSec":55527039.89981463},{"name":"(long string) (false) String#endsWith","samples":43281302,"opsSec":86553744.87799676},{"name":"(long string) (false) String#slice and strict comparison","samples":26177827,"opsSec":52339384.720974565}]}-->
