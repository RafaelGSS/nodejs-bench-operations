## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|114,299,970|57150030|
|(short string) (true) String#slice and strict comparison|60,068,350|30035966|
|(long string) (true) String#startsWith|60,630,056|30315332|
|(long string) (true) String#slice and strict comparison|54,617,744|27309042|
|(short string) (false) String#startsWith|97,885,755|48943436|
|(short string) (false) String#slice and strict comparison|60,185,785|30237981|
|(long string) (false) String#startsWith|89,080,914|44540557|
|(long string) (false) String#slice and strict comparison|55,365,572|27683104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:59:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":114299970.38882321,"samples":57150030},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60068350.244411625,"samples":30035966},{"name":"(long string) (true) String#startsWith","opsSec":60630056.6080929,"samples":30315332},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54617744.60533503,"samples":27309042},{"name":"(short string) (false) String#startsWith","opsSec":97885755.71084186,"samples":48943436},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60185785.26421636,"samples":30237981},{"name":"(long string) (false) String#startsWith","opsSec":89080914.63691305,"samples":44540557},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55365572.40322881,"samples":27683104}]}-->
