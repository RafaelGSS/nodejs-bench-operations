## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|306,271,957|93|
|(short string) (true) String#slice and strict comparison|910,043,192|99|
|(long string) (true) String#startsWith|195,127,781|97|
|(long string) (true) String#slice and strict comparison|908,624,307|96|
|(short string) (false) String#startsWith|870,063,290|100|
|(short string) (false) String#slice and strict comparison|910,010,261|100|
|(long string) (false) String#startsWith|869,571,194|99|
|(long string) (false) String#slice and strict comparison|909,275,731|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:52:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":306271957.42920554,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":910043191.7209108,"samples":8},{"name":"(long string) (true) String#startsWith","opsSec":195127781.04367822,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":908624307.347735,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":870063289.7706174,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":910010260.9758859,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":869571193.5054477,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909275730.6427504,"samples":8}]}-->
