## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,616,806|8308409|
|(short string) (true) String#slice and strict comparison|15,312,670|7656462|
|(long string) (true) String#startsWith|16,220,640|8110321|
|(long string) (true) String#slice and strict comparison|13,884,490|6942246|
|(short string) (false) String#startsWith|18,552,135|9276068|
|(short string) (false) String#slice and strict comparison|15,177,123|7588562|
|(long string) (false) String#startsWith|17,362,182|8681092|
|(long string) (false) String#slice and strict comparison|14,230,546|7115274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:22:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16616806.135693125,"samples":8308409},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15312670.269145338,"samples":7656462},{"name":"(long string) (true) String#startsWith","opsSec":16220640.44261594,"samples":8110321},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13884490.556018757,"samples":6942246},{"name":"(short string) (false) String#startsWith","opsSec":18552135.405664105,"samples":9276068},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15177123.969827505,"samples":7588562},{"name":"(long string) (false) String#startsWith","opsSec":17362182.81913696,"samples":8681092},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14230546.092886051,"samples":7115274}]}-->
