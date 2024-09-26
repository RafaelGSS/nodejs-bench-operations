## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|127,259,515|63631461|
|(short string) (true) String#slice and strict comparison|58,125,397|29065626|
|(long string) (true) String#endsWith|64,230,487|32118143|
|(long string) (true) String#slice and strict comparison|53,208,792|26604400|
|(short string) (false) String#endsWith|96,261,605|48130808|
|(short string) (false) String#slice and strict comparison|58,653,841|29326926|
|(long string) (false) String#endsWith|88,955,574|44477805|
|(long string) (false) String#slice and strict comparison|52,869,644|26441083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":127259515.77180086,"samples":63631461},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58125397.842430905,"samples":29065626},{"name":"(long string) (true) String#endsWith","opsSec":64230487.785406634,"samples":32118143},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53208792.0186812,"samples":26604400},{"name":"(short string) (false) String#endsWith","opsSec":96261605.41122341,"samples":48130808},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58653841.44230854,"samples":29326926},{"name":"(long string) (false) String#endsWith","opsSec":88955574.23985916,"samples":44477805},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52869644.56485984,"samples":26441083}]}-->
