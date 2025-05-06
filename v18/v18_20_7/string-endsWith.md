## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|53,079,020|26595656|
|(short string) (true) String#slice and strict comparison|51,317,067|25665805|
|(long string) (true) String#endsWith|51,157,458|25581172|
|(long string) (true) String#slice and strict comparison|45,210,520|22608920|
|(short string) (false) String#endsWith|57,943,725|28972534|
|(short string) (false) String#slice and strict comparison|60,229,165|30123879|
|(long string) (false) String#endsWith|56,024,176|28024228|
|(long string) (false) String#slice and strict comparison|52,505,306|26253216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:10:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26595656,"opsSec":53079020.57187114},{"name":"(short string) (true) String#slice and strict comparison","samples":25665805,"opsSec":51317067.46152035},{"name":"(long string) (true) String#endsWith","samples":25581172,"opsSec":51157458.974242546},{"name":"(long string) (true) String#slice and strict comparison","samples":22608920,"opsSec":45210520.959182955},{"name":"(short string) (false) String#endsWith","samples":28972534,"opsSec":57943725.79153577},{"name":"(short string) (false) String#slice and strict comparison","samples":30123879,"opsSec":60229165.617948726},{"name":"(long string) (false) String#endsWith","samples":28024228,"opsSec":56024176.91449892},{"name":"(long string) (false) String#slice and strict comparison","samples":26253216,"opsSec":52505306.60125831}]}-->
