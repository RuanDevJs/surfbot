import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

import { ArrowRight, LockKey } from "phosphor-react";
import Footer from "@/components/Footer";

import * as Styled from "./style";
import Lesson from "@/components/Lesson";

type ISelectedPlan = "INFANTIL" | "ADULTO" | "PROFISSIONAL";

export default function Register() {
  const [selectedPlan, setSelectedPlan] = useState<ISelectedPlan>("INFANTIL");
  const selectedPlanRef = useRef<HTMLDivElement>(null);

  const statesOfBrazil = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const years = Array.from({ length: 40 }, (_, i) => 2024 + i);

  const childrenContent = [
    "Público entre 5 e 15 anos",
    "Equipamentos fornecidos",
    "Horários de Sex. à Sab.",
    "2 horas seguidas de aula",
  ];
  const adultContent = [
    "Público entre 16 e 80 anos",
    "Equipamentos fornecidos",
    "Horários de Sex. à Sab.",
    "3 horas seguidas de aula",
  ];
  const profissionalContent = [
    "Experiência de 3 anos no surf",
    "Você deve trazer o equipamento",
    "Horários de Sex. à Sab.",
    "4 horas seguidas de aula",
  ];

  function handleSelectPlan(planSelected: ISelectedPlan) {
    setSelectedPlan(planSelected);
  }

  useEffect(() => {
    if (selectedPlanRef.current && selectedPlanRef.current !== null) {
      const plantSelected = selectedPlanRef.current.querySelector(
        `[data-plan=${selectedPlan}]`
      );

      plantSelected?.classList.add("active");
    }
  }, [selectedPlan]);

  return (
    <Styled.Container>
      <Header />
      <h1>Matricule-se</h1>
      <Styled.Form>
        <Styled.Payment>
          <Styled.Input>
            <label>Nome Completo</label>
            <input type="text" placeholder="Qual seu nome completo ?" />
          </Styled.Input>
          <Styled.Input>
            <label>Email</label>
            <input type="email" placeholder="Digite seu e-mail completo" />
          </Styled.Input>
          <Styled.Input>
            <label>CPF</label>
            <input type="number" placeholder="CPF" />
          </Styled.Input>
          <Styled.Address>
            <Styled.Input>
              <label>Endereço</label>
              <input type="string" placeholder="Rua, Número e Bairro" />
            </Styled.Input>
            <Styled.Input>
              <label>Estado</label>
              <select>
                <option
                  label="Selecione seu estado"
                  disabled
                  value="Selecione um estado"
                  selected
                />
                {statesOfBrazil.map((stateName) => {
                  return (
                    <option
                      key={stateName}
                      label={stateName}
                      value={stateName}
                    />
                  );
                })}
              </select>
            </Styled.Input>
          </Styled.Address>
          <Styled.Address>
            <Styled.Input>
              <label>CEP</label>
              <input type="string" placeholder="CEP22.222-000" />
            </Styled.Input>
            <Styled.Input>
              <label>Cidade</label>
              <select>
                <option
                  label="Selecione sua cidade"
                  disabled
                  value="Selecione sua cidade"
                  selected
                />
                {statesOfBrazil.map((stateName) => {
                  return (
                    <option
                      key={stateName}
                      label={stateName}
                      value={stateName}
                    />
                  );
                })}
              </select>
            </Styled.Input>
          </Styled.Address>
          {/* Payment Form */}
          <h3>Forma de Pagamento</h3>
          <Styled.SelectArea>
            <Styled.Select>
              <input type="radio" />
              <span>Cartão de Crédito</span>
            </Styled.Select>
            <Styled.Select>
              <input type="radio" />
              <span>Boleto Bancário</span>
            </Styled.Select>
          </Styled.SelectArea>
          {/* Creadit Card */}
          <Styled.CreditCard>
            <Styled.Input>
              <label>Nome impresso no cartão</label>
              <input type="text" placeholder="Nome impresso no cartão" />
            </Styled.Input>
            <Styled.CreditCardSelect>
              <label>Data de Expiração</label>
              <div>
                <select>
                  <option label="Mês de expiração" disabled selected />
                  {months.map((month) => {
                    return <option key={month} value={month} label={month} />;
                  })}
                </select>
                <select>
                  <option label="Ano de expiração" disabled selected />
                  {years.map((year) => {
                    return (
                      <option key={year} value={year} label={year.toString()} />
                    );
                  })}
                </select>
              </div>
            </Styled.CreditCardSelect>
          </Styled.CreditCard>
          {/* Footer */}
          <Styled.Footer>
            <p className="description">Seu cartão será debitado em R$ 49,00</p>
            <Styled.Button>
              <span>REALIZAR MATRÍCULA</span>
              <ArrowRight size={18} color="#fff" />
            </Styled.Button>
            <Styled.PaymentSecurity>
              <LockKey size={18} color="#16C70B" weight="fill" />
              <p>Informações seguras e criptografadas</p>
            </Styled.PaymentSecurity>
          </Styled.Footer>
        </Styled.Payment>
        <Styled.Plan>
          <h2>Escolha o Plano</h2>
          <Styled.Options>
            <Styled.Option active={selectedPlan === "INFANTIL"}>
              <input
                type="radio"
                onChange={() => handleSelectPlan("INFANTIL")}
                checked={selectedPlan === "INFANTIL"}
                value={selectedPlan}
                name="infantil-plan"
                id="infantil-plan"
              />
              <label htmlFor="infantil-plan">Infantil</label>
            </Styled.Option>
            <Styled.Option active={selectedPlan === "ADULTO"}>
              <input
                type="radio"
                onChange={() => handleSelectPlan("ADULTO")}
                checked={selectedPlan === "ADULTO"}
                value={selectedPlan}
                name="adulto-plan"
                id="adulto-plan"
              />
              <label htmlFor="adulto-plan">Adulto</label>
            </Styled.Option>
            <Styled.Option active={selectedPlan === "PROFISSIONAL"}>
              <input
                type="radio"
                onChange={() => handleSelectPlan("PROFISSIONAL")}
                checked={selectedPlan === "PROFISSIONAL"}
                value={selectedPlan}
                name="profissional-plan"
                id="profissional-plan"
              />
              <label htmlFor="profissional-plan">Profissional</label>
            </Styled.Option>
          </Styled.Options>
          <Styled.Lessons ref={selectedPlanRef}>
            <Styled.Lesson
              className="animate-top"
              data-plan="INFANTIL"
              active={selectedPlan === "INFANTIL"}
            >
              <Lesson
                iconQuantity={1}
                type="INFANTIL"
                price="49,00"
                content={childrenContent}
              />
            </Styled.Lesson>
            <Styled.Lesson
              className="animate-bottom"
              data-plan="ADULTO"
              active={selectedPlan === "ADULTO"}
            >
              <Lesson
                iconQuantity={2}
                type="ADULTO"
                price="69,00"
                content={adultContent}
              />
            </Styled.Lesson>
            <Styled.Lesson
              className="animate-left"
              data-plan="PROFISSIONAL"
              active={selectedPlan === "PROFISSIONAL"}
            >
              <Lesson
                iconQuantity={3}
                type="PROFISSIONAL"
                price="99,00"
                content={profissionalContent}
              />
            </Styled.Lesson>
          </Styled.Lessons>
        </Styled.Plan>
      </Styled.Form>
      <Footer />
    </Styled.Container>
  );
}
