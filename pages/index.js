import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Input from "../components/Input"
import InputRadio from "../components/InputRadio"
import Button from "../components/Button"
import ChoiceList from "../components/ChoiceList"
import ChoiceSelectWrapper from "../components/ChoiceSelectWrapper"
import ChoiceSelect from "../components/ChoiceSelect"

const App = ({ page, updatePage, formData, updateFormData }) => {
  const router = useRouter()

  let { t } = useTranslation("common")

  console.log(formData)

  switch (page) {
    // Personal Data Form
    case 1:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-pink)">
                <Form>
                  <div>
                    <Input
                      label={t("name")}
                      type="text"
                      id="name"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ name: value })
                      }}
                    />
                    <InputRadio
                      label={t("sex")}
                      items={[
                        { id: "sex_opt1", label: t("sex_male"), value: "male" },
                        {
                          id: "sex_opt2",
                          label: t("sex_female"),
                          value: "female",
                        },
                      ]}
                      name="sex"
                      onChangeHandler={(value) => {
                        updateFormData({ sex: value })
                      }}
                    />
                    <Input
                      label={t("age")}
                      type="number"
                      id="age"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ age: value })
                      }}
                    />
                    <InputRadio
                      label={t("congenital")}
                      items={[
                        {
                          id: "congenital1",
                          label: t("congenital_opt1"),
                          value: "โรคอ้วนลงพุง",
                        },
                        {
                          id: "congenital2",
                          label: t("congenital_opt2"),
                          value: "โรคเครียด",
                        },
                        {
                          id: "congenital3",
                          label: t("congenital_opt3"),
                          value: "โรคความดัน",
                        },
                        {
                          id: "congenital4",
                          label: t("congenital_opt4"),
                          value: "โรคเบาหวาน",
                        },
                        {
                          id: "congenital5",
                          label: t("congenital_opt5"),
                          value: "โรคหลอดเลือดสมองและหัวใจ",
                        },
                      ]}
                      name="congenital"
                      onChangeHandler={(value) => {
                        updateFormData({ congenital: value })
                      }}
                    />
                    <Input
                      label={t("exercises")}
                      type="text"
                      id="exercise"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ exercise: value })
                      }}
                    />
                    <InputRadio
                      label={t("habits")}
                      items={[
                        {
                          id: "symptom1",
                          label: t("smoking"),
                          value: "สูบบุหรี่",
                        },
                        {
                          id: "symptom2",
                          label: t("alcohol_abuse"),
                          value: "ดื่มสุรา",
                        },
                      ]}
                      name="symptom"
                      onChangeHandler={(value) => {
                        updateFormData({ symptom: value })
                      }}
                    />
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-pink)"
                onClick={() => {
                  if (
                    typeof formData.name !== "undefined" &&
                    typeof formData.sex !== "undefined" &&
                    typeof formData.age !== "undefined" &&
                    typeof formData.congenital !== "undefined" &&
                    typeof formData.exercise !== "undefined" &&
                    typeof formData.symptom !== "undefined" &&
                    !isNaN(formData.age)
                  ) {
                    updatePage(page + 1)
                  } else {
                    alert(t("form_invalid"))
                  }
                }}
                message={t("save")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Information
    case 2:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH CHECK UP
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "240px" }}>
                      {t("page2_m1")}
                    </p>
                    <div className="py-2 display-1">“</div>
                    <p className="mx-auto" style={{ maxWidth: "240px" }}>
                      {t("page2_m2")}
                    </p>
                    <div className="py-3 display-1">”</div>
                    <p className="mx-auto m-0" style={{ maxWidth: "260px" }}>
                      {t("page2_m3")}
                    </p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Direction
    case 3:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>HCU MAP</h1>
                    <p className="mx-auto" style={{ maxWidth: "240px" }}>
                      {t("page3_m1")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // 3อ. (All section have not been checked.)
    case 4:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "200px" }}>
                      {t("3or")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 1 Direction
    case 5:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>HCU MAP</h1>
                    <p className="mx-auto" style={{ maxWidth: "240px" }}>
                      {t("page5_m1")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Direction
    case 6:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{
                        color: "var(--color-dark-green)",
                        maxWidth: "200px",
                      }}
                    >
                      {t("page6_m1")}
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Form
    case 7:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div>
                    <h1
                      className="text-center"
                      style={{ color: "var(--color-dark-green)" }}
                    >
                      {t("data_you_got")}
                    </h1>
                    <div>
                      <Input
                        label={t("page7_opt1")}
                        type="number"
                        id="opt1"
                        color="var(--color-dark-green)"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt1: value })
                        }}
                      />
                      <Input
                        label={t("page7_opt2")}
                        type="number"
                        id="opt2"
                        color="var(--color-dark-green)"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt2: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          {
                            id: "opt3",
                            label: t("page7_opt3"),
                            value: "pass",
                          },
                        ]}
                        name="opt3"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt3: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          { id: "opt4", label: t("page7_opt4"), value: "pass" },
                        ]}
                        name="opt4"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt4: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          {
                            id: "opt5",
                            label: t("page7_opt5"),
                            value: "pass",
                          },
                        ]}
                        name="opt5"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt5: value })
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => {
                  if (
                    typeof formData.section1_opt1 !== "undefined" &&
                    typeof formData.section1_opt2 !== "undefined" &&
                    typeof formData.section1_opt3 !== "undefined" &&
                    typeof formData.section1_opt4 !== "undefined" &&
                    typeof formData.section1_opt5 !== "undefined" &&
                    !isNaN(formData.section1_opt1) &&
                    !isNaN(formData.section1_opt2)
                  ) {
                    updatePage(page + 1)
                  } else {
                    alert(t("form_invalid"))
                  }
                }}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Form Result
    case 8:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div
                    className="text-center"
                    style={{ color: "var(--color-dark-green)" }}
                  >
                    <h1 className="pb-4">{t("data_you_got")}</h1>
                    <h1 className="mx-auto" style={{ maxWidth: "220px" }}>
                      {t("page8_m1")}
                    </h1>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 1 Direction
    case 9:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{
                        color: "var(--color-dark-green)",
                        maxWidth: "220px",
                      }}
                    >
                      {t("suggestion")}
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("done")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 1 has been checked.)
    case 10:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "200px" }}>
                      {t("3or")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 2 Direction
    case 11:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-green)" }}>HCU MAP</h1>
                    <p className="mx-auto" style={{ maxWidth: "260px" }}>
                      {t("page11_m1")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Questions
    case 12:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto pb-4"
                      style={{ color: "var(--color-green)", maxWidth: "260px" }}
                    >
                      {t("page12_m1")}
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "220px" }}>
                      {t("page12_m2")}
                    </p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Question 1
    case 13:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <ChoiceList
                    color="var(--color-white)"
                    bgColor="var(--color-green)"
                    list={1}
                    message={t("section2_q1")}
                  />
                  <ChoiceSelectWrapper>
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "ทำเป็นประจำ" })
                        updatePage(page + 1)
                      }}
                      message={t("section2_q1a1")}
                    />
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "ทำบ้าง เป็นบางครั้ง" })
                        updatePage(page + 1)
                      }}
                      message={t("section2_q1a2")}
                    />
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "แทบไม่ทำ/ไม่ทำเลย" })
                        updatePage(page + 1)
                      }}
                      message={t("section2_q1a3")}
                    />
                  </ChoiceSelectWrapper>
                </Form>
              </Card>
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Result
    case 14:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{ color: "var(--color-green)", maxWidth: "220px" }}
                    >
                      {t("page14_m1")}
                    </h1>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Direction
    case 15:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{
                        color: "var(--color-green)",
                        maxWidth: "220px",
                      }}
                    >
                      {t("suggestion")}
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("done")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 2 has been checked.)
    case 16:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "200px" }}>
                      {t("3or")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 3 Direction
    case 17:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>HCU MAP</h1>
                    <p className="mx-auto" style={{ maxWidth: "260px" }}>
                      {t("page17_m1")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Questions
    case 18:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto pb-4"
                      style={{ color: "var(--color-blue)", maxWidth: "260px" }}
                    >
                      {t("page18_m1")}
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "200px" }}>
                      {t("page18_m2")}
                    </p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Question 1
    case 19:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <ChoiceList
                    color="var(--color-white)"
                    bgColor="var(--color-blue)"
                    list={1}
                    message={t("section3_q1")}
                  />
                  <ChoiceSelectWrapper>
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({ section3_q1: "ไม่มีอาการ" })
                        updatePage(page + 1)
                      }}
                      message={t("section3_q1a1")}
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({
                          section3_q1: "มีอาการแต่ไม่บ่อย",
                        })
                        updatePage(page + 1)
                      }}
                      message={t("section3_q1a2")}
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({
                          section3_q1: "มีอาการเกิดขึ้นเกือบทุกวัน",
                        })
                        updatePage(page + 1)
                      }}
                      message={t("section3_q1a3")}
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({ section3_q1: "มีอาการเกิดขึ้นทุกวัน" })
                        updatePage(page + 1)
                      }}
                      message={t("section3_q1a4")}
                    />
                  </ChoiceSelectWrapper>
                </Form>
              </Card>
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Result
    case 20:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{ color: "var(--color-blue)", maxWidth: "240px" }}
                    >
                      {t("page20_m1")}
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <h2 style={{ color: "var(--color-green)" }}>
                        {t("page20_m2")}
                      </h2>
                      <p>{t("page20_m3")}</p>
                      <p className="mx-auto" style={{ maxWidth: "200px" }}>
                        {t("page20_m4")}
                      </p>
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Direction
    case 21:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="mx-auto"
                      style={{
                        color: "var(--color-blue)",
                        maxWidth: "220px",
                      }}
                    >
                      {t("suggestion")}
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("done")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 3 has been checked.)
    case 22:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: "200px" }}>
                      {t("3or")}
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("done")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    default:
      useEffect(() => {
        document.querySelector("body").style.backgroundColor =
          "var(--color-white)"
      })

      return (
        <Container>
          <Header />
          <Layout>
            <Card color="var(--color-pink)">
              <div className="pb-3">
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "th" })
                    updatePage(1)
                  }}
                >
                  ภาษาไทย
                </button>
              </div>
              <div>
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "en" })
                    updatePage(1)
                  }}
                >
                  English
                </button>
              </div>
            </Card>
          </Layout>
          <Footer />
        </Container>
      )
  }
}

export default App
