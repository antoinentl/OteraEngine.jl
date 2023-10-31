var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = OteraEngine","category":"page"},{"location":"#OteraEngine.jl","page":"Home","title":"OteraEngine.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for OteraEngine.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package is very very small, but useful. When you use this package with Genie.jl, you can create dynamic and powerful pages.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you have any questions about this, please write issues on GitHub!","category":"page"},{"location":"#Resources","page":"Home","title":"Resources","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documents(This Page)\nTutorial\nsource","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#Installation","page":"Tutorial","title":"Installation","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"OteraEngine can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"pkg > add OteraEngine","category":"page"},{"location":"tutorial/#Usage","page":"Tutorial","title":"Usage","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Acutually, this package has only one structure, but these are very powerful because of Metaprogramming function of Julia.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Template","category":"page"},{"location":"tutorial/#Main.OteraEngine.Template","page":"Tutorial","title":"Main.OteraEngine.Template","text":"Template(txt::String; path::Bool=true, config_path::String=\"\", config::Dict{String, String} = Dict())\n\nThis is the only structure and function of this package. This structure has 4 parameter,\n\ntxt is the path to the template file or template of String type.\npath determines whether the parameter txt represents the file path. The default value is true.\nconfig_path is path to config file. The suffix of config file must be toml.\nconfig is configuration of template. It is type of Dict, please see configuraiton for more detail.\n\nRendering\n\nAfter you create a Template, you just have to execute the codes! For this, you use the Function-like Object of Template structure.tmp(; jl_init::Dict{String, String}, tmp_init::Dict{String, String}) variables are initialized by jl_init(for julia code) and tmp_init(for template code). These parameters must be Dict type. If you don't pass the jl_init or tmp_init, the initialization won't be done.\n\nExample\n\nThis is a simple usage:\n\njulia> using OteraEngine\njulia> txt = \"```using Dates; now()```. Hello {{ usr }}!\"\njulia> tmp = Template(txt, path = false)\njulia> init = Dict(\"usr\"=>\"OteraEngine\")\njulia> tmp(tmp_init = init)\n\n\n\n\n\n","category":"type"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Learn about grammer and configuration in the sections below.","category":"page"},{"location":"tutorial/#Base-Syntax","page":"Tutorial","title":"Base Syntax","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Actually, you have two way to write template. The first way is to write the code in julia. This is example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"<html>\n    <head><title>MyPage</title></head>\n    <body>\n        The current time is <strong>\n        ```\n        using Dates\n        now()\n        ```\n        </strong>\n    </body>\n</html>","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"the code inside","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"    ```...```","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is executed as julia code(with the default configuration). In this case, OteraEngine insert the output of now().","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The second way is to use Jinja like syntax. Have you ever seen template like this?:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#input\n<html>\n    <head><title>MyPage</title></head>\n    <body>\n        {% set name = \"watasu\" %}\n        {% if name==\"watasu\" %}\n        your name is {{ name }}, right?\n        {% end %}\n        {% for i in 1 : 10 %}\n        Hello {{i}}\n        {% end %}\n        {% with age = 15 %}\n        and your age is {{ age }}.\n        {% end %}\n    </body>\n</html>\n#output\n<html>\n    <head><title>MyPage</title></head>\n    <body>\n        your name is watasu, right?\n        Hello 1\n        Hello 2\n        Hello 3\n        Hello 4\n        Hello 5\n        Hello 6\n        Hello 7\n        Hello 8\n        Hello 9\n        Hello 10\n        and your age is 15.\n    </body>\n</html>","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"these statement is available:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"if : insert the content in this statement if the expression is true.\nfor : loop and insert values to variables.\nwith : assign a value to a variable. variables defined with this statement is available until end\nset : assign a value to a variable. variables defined with this statement don't have a scope.\nend : represent the end of a statement. this is necessary for if, for, with.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"these code will be executed after transformed to julia code. So the basic syntax is the same as Julia.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"warning: escape sequence in code blocks\nIf you write code includes escape sequence, they will disappear except \\n. This is not the problem in many cases, but if you want to do it, please let me know in issue.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"And you can also insert variables in the text. Here is an example(tmp_init = Dict(\"name\"=>\"watasu\")):","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#input\nmy name is {{ name }}.\n#output\nmy name is watasu","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"the variables inside","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"{{...}}","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is replaced with values defined in tmp_init or template code.","category":"page"},{"location":"tutorial/#Include-Template","page":"Tutorial","title":"Include Template","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"You can include template with {% include \"(template filename)\" %} code block. This is the tiny example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#=This is the included template(test2.html)=#\nHello everyone! My name is watasu.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#=This is the main template=#\n{% include \"test2.html\" %}\nToday, I'd like to introduce OteraEngine.jl","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"warning: Template filename have to be enclosed with double quotation mark\nTemplate filename have to be like this: \"test.html\". Otherwise, parser returns error.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This code block is also available inside the {% block %} explained in next section.","category":"page"},{"location":"tutorial/#Extend-Template","page":"Tutorial","title":"Extend Template","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When you build large web app with OteraEngine, you may want to use \"template of template\". This is possible with {% extends %} code block. This code block have to be located at the top of the document, otherwise ignored. This is the example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#=This is the base template(test2.html)=#\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>test for extends</title>\n    </head>\n    <body>\n        <div>\n            {% block body %}\n            {% endblock %}\n        </div>\n    </body>\n</html>","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#=This is the main template=#\n{% extends \"test2.html\" %}\n{% block body %}\n            <h1>hello</h1>\n            <div>\n                <p>some content here.</p>\n            </div>\n{% endblock %}","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"#=Output=#\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>test for extends</title>\n    </head>\n    <body>\n        <div>\n            <h1>hello</h1>\n            <div>\n                <p>some content here.</p>\n            </div>\n        </div>\n    </body>\n</html>","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"warning: Template filename have to be enclosed with double quotation mark\nTemplate filename have to be like this: \"test.html\". Otherwise, parser returns error.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"If you write {% extends (template filename) %} in main template, parser will use (template filename) as the base template. And, you can write blocks in the main template with {% block (block name) %} and {% endblock %}.","category":"page"},{"location":"tutorial/#Configurations","page":"Tutorial","title":"Configurations","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"there are six configurations:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"jl_block_start: The string at the start of jl code blocks.\njl_block_stop : The string at the end of jl code blocks.\ntmp_block_start: The string at the start of tmp code blocks.\ntmp_block_start : The string at the end of tmp code blocks.\nvariable_block_start : The string at the start of variable blocks.\nvariable_block_stop : The string at the end of variable blocks.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and the default configuration is this:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"    \"jl_block_start\"=>\"```\",\n    \"jl_block_stop\"=>\"```\",\n    \"tmp_block_start\"=>\"{%\",\n    \"tmp_block_stop\"=>\"%}\",\n    \"variable_block_start\"=>\"{{\",\n    \"variable_block_stop\"=>\"}}\"","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"configurations can be loaded from TOML file. You don't have to specify all the configurations(The rest uses the default settings).","category":"page"}]
}
