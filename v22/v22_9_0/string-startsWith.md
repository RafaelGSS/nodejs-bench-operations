## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,228,801|61117010|
|(short string) (true) String#slice and strict comparison|49,890,110|24947501|
|(long string) (true) String#startsWith|56,956,470|28479245|
|(long string) (true) String#slice and strict comparison|46,265,510|23132759|
|(short string) (false) String#startsWith|93,193,041|46605288|
|(short string) (false) String#slice and strict comparison|51,046,428|25528056|
|(long string) (false) String#startsWith|86,351,095|43183597|
|(long string) (false) String#slice and strict comparison|45,220,313|22610157|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:06:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122228801.8079932,"samples":61117010},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49890110.47422845,"samples":24947501},{"name":"(long string) (true) String#startsWith","opsSec":56956470.55138013,"samples":28479245},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46265510.50498729,"samples":23132759},{"name":"(short string) (false) String#startsWith","opsSec":93193041.54284763,"samples":46605288},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51046428.390441485,"samples":25528056},{"name":"(long string) (false) String#startsWith","opsSec":86351095.21991378,"samples":43183597},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45220313.095593736,"samples":22610157}]}-->
