# AngularBoiler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# -----------------------------------------------------------------------
# scss、routingプロジェクト
# -----------------------------------------------------------------------
ng new myapp --style=scss --routing

e2e,karma,protractor,tslint等が不要なら
--minimal

# -----------------------------------------------------------------------
# ng generateコマンド
# -----------------------------------------------------------------------
詳細は、http://www.buildinsider.net/web/angulartips/014

※ComponentとDirectiveの「--prefix」は.angular-cli.jsonのprefixに記載
# 【Component】
ng g component components/page/my-page
ng g component components/parts/my-parts
# 【Directive】
ng g directive directives/my-directive
# 【Pipe】
ng g pipe pipes/my-pipe
# 【Service】
ng g service services/my-service
# 【Guard】
ng g guard guards/my-guard
# 【モジュール】
ng g module my-module --routing
# 【class】
ng g class myClass --spec


以下は、tsファイルだけしか作成されないため、あまり効果は感じない
(classは specファイルが出力できるため場合によっては)
Class       :ng g class my-class --spec
Interface   :ng g interface my-interface
Enum        :ng g enum my-enum

# -----------------------------------------------------------------------
# 複数アプリを管理するには
# -----------------------------------------------------------------------
ng g application my-other-app
ng serve my-other-app

cliでプロジェクトを指定して色々追加
ng g component hoge -project my-other-app
ng serve -project hoge

デプロイはbaseref を分けて公開
ng serve --base-ref /other/ --project my-other-app --port=4201"
（/％/のように囲うことが大切）

npmのscriptに書くのも便利
"scripts": {
    "app2": "ng serve --base-ref=/sub1/ --project hoge --port=4201",
    "app3": "ng serve --base-ref=/sub2/ --project hoge2 --port=4202"
}


# -----------------------------------------------------------------------
# コンパイル
# -----------------------------------------------------------------------
/* distフォルダにプロダクションコンパイル */
ng build -prod  /* ドメイン直下ならこれで良い*/

/* サブディレクトリに配備する場合 */
ng build -prod -base-href=/subdir/
ng build -prod --base-href /users --deploy-url /public

詳しい内容
http://apoc.jp/angular-cli-subdir/

注意点について
通常、base hrefをサブディレクトリに指定してもCSSのbackground-imageのパスには適用されません。
そのため、Angular CLIでは--base-hrefの値に合わせてbackground-imageのパスを直接書き換えているようです。
しかし、HTMLのimgタグのsrc属性は書き換わらないため、
パスの記述をカレントディレクトリからの開始を示す./から始める必要があります。

# -----------------------------------------------------------------------
