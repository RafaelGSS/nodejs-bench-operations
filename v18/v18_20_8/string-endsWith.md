## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,844,483|26422252|
|(short string) (true) String#slice and strict comparison|51,666,252|25835535|
|(long string) (true) String#endsWith|50,689,221|25344690|
|(long string) (true) String#slice and strict comparison|45,591,982|22800706|
|(short string) (false) String#endsWith|57,846,820|28925966|
|(short string) (false) String#slice and strict comparison|60,302,257|30154112|
|(long string) (false) String#endsWith|55,818,480|27909253|
|(long string) (false) String#slice and strict comparison|52,392,406|26196212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:09:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26422252,"opsSec":52844483.81340718},{"name":"(short string) (true) String#slice and strict comparison","samples":25835535,"opsSec":51666252.225312494},{"name":"(long string) (true) String#endsWith","samples":25344690,"opsSec":50689221.444115326},{"name":"(long string) (true) String#slice and strict comparison","samples":22800706,"opsSec":45591982.93964032},{"name":"(short string) (false) String#endsWith","samples":28925966,"opsSec":57846820.539243504},{"name":"(short string) (false) String#slice and strict comparison","samples":30154112,"opsSec":60302257.694623694},{"name":"(long string) (false) String#endsWith","samples":27909253,"opsSec":55818480.65840978},{"name":"(long string) (false) String#slice and strict comparison","samples":26196212,"opsSec":52392406.60572101}]}-->
