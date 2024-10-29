## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|126,589,063|63294539|
|(short string) (true) String#slice and strict comparison|60,375,624|30245825|
|(long string) (true) String#startsWith|63,280,920|31640598|
|(long string) (true) String#slice and strict comparison|54,283,379|27141697|
|(short string) (false) String#startsWith|93,748,836|46876729|
|(short string) (false) String#slice and strict comparison|60,445,194|30222605|
|(long string) (false) String#startsWith|87,917,047|43980194|
|(long string) (false) String#slice and strict comparison|54,281,871|27140942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:01:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":126589063.82202485,"samples":63294539},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60375624.110375874,"samples":30245825},{"name":"(long string) (true) String#startsWith","opsSec":63280920.98111741,"samples":31640598},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54283379.12635412,"samples":27141697},{"name":"(short string) (false) String#startsWith","opsSec":93748836.74484149,"samples":46876729},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60445194.04246877,"samples":30222605},{"name":"(long string) (false) String#startsWith","opsSec":87917047.88457254,"samples":43980194},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54281871.406605825,"samples":27140942}]}-->
