## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,554,515|5777258|
|(short string) (true) String#slice and strict comparison|12,546,640|6273321|
|(long string) (true) String#endsWith|11,959,170|5979586|
|(long string) (true) String#slice and strict comparison|12,670,074|6335038|
|(short string) (false) String#endsWith|12,361,782|6180892|
|(short string) (false) String#slice and strict comparison|13,232,019|6616010|
|(long string) (false) String#endsWith|12,282,181|6141091|
|(long string) (false) String#slice and strict comparison|12,775,132|6387567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:38:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11554515.306218037,"samples":5777258},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12546640.319420965,"samples":6273321},{"name":"(long string) (true) String#endsWith","opsSec":11959170.186758805,"samples":5979586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12670074.607136676,"samples":6335038},{"name":"(short string) (false) String#endsWith","opsSec":12361782.433613526,"samples":6180892},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13232019.929708017,"samples":6616010},{"name":"(long string) (false) String#endsWith","opsSec":12282181.807464251,"samples":6141091},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12775132.33783406,"samples":6387567}]}-->
